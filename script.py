from icrawler.builtin import GoogleImageCrawler

google_crawler = GoogleImageCrawler(storage={'root_dir': 'content/sketches/shaders/paintings'})
google_crawler.crawl(keyword='CR7', max_num=40)
