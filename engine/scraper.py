import urllib
import stocks as st
import os


def main():
    stocks_list = st.app_config["stocks"]
    download_path = st.app_config["common_config"]["path"]
    downloader = urllib.URLopener()
    for stock in stocks_list:
        downloader.retrieve(stock["url"], os.path.join(os.getcwd(), download_path, stock["symbol"] + ".csv"))


if __name__ == "__main__":
    main()
