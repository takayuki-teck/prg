import os
import glob
import jaconv
import mutagen
from mutagen import m4a
from mutagen.easyid3 import EasyID3
from mutagen.mp4 import MP4

#****************************
# ＜設定＞
ENV_TGT_PATH = 'D:/Music' #対象パス
# ENV_TGT_PATH = 'D:/test/test1'
ENV_LOG_FILE = 'D:/test/result.log' #ログファイル
ENV_ERR_LOG_FILE = 'D:/test/error.log' #ログファイル

#****************************
# ＜処理内容＞
# ログ出力
# ＜引数＞
# msg:出力内容
#
def writeLog(logpath, msg):

    f = open(logpath, 'a', encoding='UTF-8')
    
    try:
        f.write(msg + ' \n')
    except UnicodeEncodeError as e:
        # 例外が発生したらコンソールに表示
        print(e)
        print(type(e))

    f.close()

#****************************
# ＜処理内容＞
# 変更したファイルパスを出力する
# ＜引数＞
# tgt_path:変更したファイルパス
#
def writeChangeDirNameLog(tgt_path):
    writeLog(ENV_LOG_FILE, 'タイトル変更：' + tgt_path)

#****************************
# ＜処理内容＞
# エラーログ出力
# ＜引数＞
# msg:出力内容
#
def writeErrorLog(ENV_ERR_LOG_FILE, msg):
    writeLog('【エラー】' + msg)

#****************************
# ＜処理内容＞
# タイトルを変更する
# ＜引数＞
# tgt_path:対象パス
#
def change_IDTag_info(tgt_path):

    #対象ディレクトリ配下を取得
    files = os.listdir(tgt_path)

    for f in files:

        #フルパスを取得
        full_path = os.path.join(tgt_path, f)

        #ファイルの場合、タイトルを編集
        if os.path.isfile(full_path):

            # 拡張子なしのファイル名
            basename = os.path.splitext(os.path.basename(full_path))[0]

            if full_path.endswith(".mp3"):
                
                tags = EasyID3(full_path)               

                if (tags['title'])[0] != basename:
                    tags['title'] = basename
                    tags.save()
                    writeChangeDirNameLog(full_path)

            elif full_path.endswith(".m4a"):
                
                mp4 = MP4(full_path)               

                if (mp4.tags["\xa9nam"])[0] != basename:
                    mp4.tags["\xa9nam"] = basename
                    mp4.save()
                    writeChangeDirNameLog(full_path)

        #ディレクトリの場合
        elif os.path.isdir(full_path):

            #サブディレクトリも変更する
            change_IDTag_info(full_path)
        else:
            writeErrorLog(ENV_ERR_LOG_FILE, 'ファイルでもフォルダでもありません:' + full_path)

#****************************
# メイン処理
#****************************
change_IDTag_info(ENV_TGT_PATH)