import os
import pandas as pd
import matplotlib.pyplot as plt
import stocks as st
import json


def plot_selected(df, columns, start, end):
    sliced_df = df.ix[start:end, columns]
    title = ""
    for stock in columns:
        title += stock + " "

    plot_data(sliced_df, title)


def symbol_to_path(symbol, base_dir="data"):
    return os.path.join(base_dir, "{}.csv".format(symbol))


def plot_data(df, title="Stock market"):
    ax = df.plot(title=title, fontsize=16)
    ax.set_xlabel("date", fontsize=16)
    ax.set_ylabel("price", fontsize=16)
    plt.show()


def get_info_symbol(symbol, path):
    df = pd.read_csv(symbol_to_path(symbol, path), index_col="fecha", parse_dates=True, na_values=["nan"],
                     usecols=["fecha", "apertura", "maximo", "minimo", "cierre", "volumen"])
    df.columns = ["open", "high", "low", "close", "volume"]
    return df


def get_data(symbols, dates, path):
    df_price = pd.DataFrame(index=dates)
    df_vol = pd.DataFrame(index=dates)

    for symbol in symbols:
        df_temp_price = pd.read_csv(symbol_to_path(symbol, path), index_col="fecha", parse_dates=True,
                                    usecols=["fecha", "cierre"], na_values=["nan"])
        df_temp_price = df_temp_price.rename(columns={"cierre": symbol})

        df_temp_vol = pd.read_csv(symbol_to_path(symbol, path), index_col="fecha", parse_dates=True,
                                  usecols=["fecha", "volumen"], na_values=["nan"])
        df_temp_vol = df_temp_vol.rename(columns={"volumen": symbol})

        df_vol = df_vol.join(df_temp_vol)
        df_price = df_price.join(df_temp_price)

        if symbol == "ALUA":
            df_vol = df_vol.dropna(subset=["ALUA"])
            df_price = df_price.dropna(subset=["ALUA"])

    return pd.Panel({"price": df_price, "volume": df_vol})


def get_mmv(df, window):
    return df["price"].ix[-window:].mean()


def get_vma(df, window):
    return df["volume"].ix[-window:].mean()


def remove_extension(string):
    return string.split(".")[0]


def main():
    current_dir = os.path.join(os.getcwd(), st.app_config["common_config"]["path"])
    symbols = []

    dates = pd.date_range("2010-01-01", "2016-12-31")

    for stock in st.app_config["stocks"]:
        symbols.append(stock["id"])

    df = get_data(symbols, dates, current_dir)

    output = []

    mmv10 = get_mmv(df, 10)
    mmv20 = get_mmv(df, 20)
    mmv50 = get_mmv(df, 50)

    vma10 = get_vma(df, 10)
    vma20 = get_vma(df, 20)
    vma50 = get_vma(df, 50)

    for symbol in st.app_config["stocks"]:
        stock_info = get_info_symbol(symbol["id"], current_dir).tail(1)

        output.append({
            "stock_detail": {
                "id": symbol["id"],
                "name": symbol["name"],
                "ticketSymbol": symbol["symbol"],
                "country": symbol["country"],
                "lastUpdate": stock_info.index[0].strftime("%d/%m/%Y"),
                "previousClose": {
                    "date": stock_info.index[0].strftime("%d/%m/%Y"),
                    "close": stock_info.iloc[0]['open'],
                    "high": stock_info.iloc[0]['high'],
                    "low": stock_info.iloc[0]['low'],
                    "open": stock_info.iloc[0]['open'],
                    "volume": stock_info.iloc[0]['volume']
                }
            },
            "ta": {
                "mmv": {
                    "10": mmv10[symbol["id"]],
                    "20": mmv20[symbol["id"]],
                    "50": mmv50[symbol["id"]]
                },
                "vma": {
                    "10": vma10[symbol["id"]],
                    "20": vma20[symbol["id"]],
                    "50": vma50[symbol["id"]]
                }
            }
        })

    with open('api/dashboard.json', 'w') as file_handler:
        json.dump(output, file_handler)


if __name__ == "__main__":
    main()
