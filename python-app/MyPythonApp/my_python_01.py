import os
import glob
import jaconv

#****************************
# ＜設定＞
ENV_TGT_PATH = 'D:/Music' #対象パス
ENV_LOG_FILE = 'D:/test/result.log' #ログファイル

#****************************
# ＜処理内容＞
# ログ出力
# ＜引数＞
# msg:出力内容
#
def writeLog(msg):

    f = open(ENV_LOG_FILE, 'a', encoding='UTF-8')
    
    try:
        f.write(msg + ' \n')
    except UnicodeEncodeError as e:
        # 例外が発生したらコンソールに表示
        print(e)
        print(type(e))

    f.close()

#****************************
# ＜処理内容＞
# 変更前パスと変更後パスのログを出力する
# ＜引数＞
# before_dir:変更前パス
# after_dir:変更後パス
#
def writeChangeDirNameLog(before_dir, after_dir):
    writeLog('【変更前】' + before_dir + '\t' + '【変更後】' + after_dir)

#****************************
# ＜処理内容＞
# エラーログ出力
# ＜引数＞
# msg:出力内容
#
def writeErrorLog(msg):
    writeLog('【エラー】' + msg)

#****************************
# ＜処理内容＞
# ディレクトリ名に使用できない文字を除外する
# ＜引数＞
# dir_name:ディレクトリ名
# ＜戻り値＞
# ディレクトリ名
def cleansingDirName(dir_name):

    cleansing_dir_name = dir_name
    cleansing_dir_name = cleansing_dir_name.replace('\\', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('/', ' ')
    cleansing_dir_name = cleansing_dir_name.replace(':', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('*', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('?', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('"', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('<', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('>', ' ')
    cleansing_dir_name = cleansing_dir_name.replace('|', ' ')

    # 先頭と末尾の空白を除去して返す
    return cleansing_dir_name.strip()

#****************************
# ＜処理内容＞
# ディレクトリ名を全角から半角に変更する
# ＜引数＞
# tgt_path:対象パス
#
def changeDir_ToHankaku(tgt_path):

    #対象ディレクトリ配下を取得
    files = os.listdir(tgt_path)

    for f in files:

        #フルパスを取得
        full_path = os.path.join(tgt_path, f)

        #ディレクトリ、かつ、全角文字があれば半角に変更
        if os.path.isdir(full_path):

            #変更後のディレクトリ名を取得
            #カタカナは半角にしない
            #数字は半角にする
            #アルファベットと記号は半角にする
            after_dir = jaconv.z2h(f, kana=False, digit=True, ascii=True)

            # ディレクトリに使用できない文字を除去する
            after_dir = cleansingDirName(after_dir)

            # 変更後のパスを取得
            after_path = os.path.join(tgt_path, after_dir)

            #ディレクトリ名を変更
            if full_path != after_path:

                #変更後のディレクトリが同じ名前の場合は処理をスキップ
                if os.path.isdir(after_path):
                    writeErrorLog('同じ名前のディレクトリが存在します:' + after_path)
                    continue

                #ディレクトリ名変更
                os.rename(full_path, after_path)
                writeChangeDirNameLog(full_path, after_path)

                #サブディレクトリも変更する
                changeDir_ToHankaku(after_path)
            else:
                #サブディレクトリも変更する
                changeDir_ToHankaku(full_path)

#****************************
# メイン処理
#****************************
changeDir_ToHankaku(ENV_TGT_PATH)