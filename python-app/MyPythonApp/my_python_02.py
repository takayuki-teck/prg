from mutagen.easyid3 import EasyID3

path = 'D:\\test\\01 だからその手を離して（Ｍｉｘｔｕｒｅ　ｓｔｙｌｅ）.mp3'
tags = EasyID3(path)
# print(tags['title'])
# print((tags['title'])[0])

tags['title'] = 'だからその手を離して'
print(tags['title'])
print((tags['title'])[0])


tags.save()