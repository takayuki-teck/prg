const get_pokemon_list = () => {
    list = [
        "フシギダネ",
"フシギソウ",
"フシギバナ",
"ヒトカゲ",
"リザード",
"リザードン",
"ゼニガメ",
"カメール",
"カメックス",
"キャタピー",
"トランセル",
"バタフリー",
"ビードル",
"コクーン",
"スピアー",
"ポッポ",
"ピジョン",
"ピジョット",
"コラッタ",
"コラッタ",
"ラッタ",
"ラッタ",
"オニスズメ",
"オニドリル",
"アーボ",
"アーボック",
"ピカチュウ",
"ライチュウ",
"ライチュウ",
"サンド",
"サンド",
"サンドパン",
"サンドパン",
"ニドラン",
"ニドリーナ",
"ニドクイン",
"ニドラン",
"ニドリーノ",
"ニドキング",
"ピッピ",
"ピクシー",
"ロコン",
"ロコン",
"キュウコン",
"キュウコン",
"プリン",
"プクリン",
"ズバット",
"ゴルバット",
"ナゾノクサ",
"クサイハナ",
"ラフレシア",
"パラス",
"パラセクト",
"コンパン",
"モルフォン",
"ディグダ",
"ディグダ",
"ダグトリオ",
"ダグトリオ",
"ニャース",
"ニャース",
"ニャース",
"ペルシアン",
"ペルシアン",
"コダック",
"ゴルダック",
"マンキー",
"オコリザル",
"ガーディ",
"ガーディ",
"ウインディ",
"ウインディ",
"ニョロモ",
"ニョロゾ",
"ニョロボン",
"ケーシィ",
"ユンゲラー",
"フーディン",
"ワンリキー",
"ゴーリキー",
"カイリキー",
"マダツボミ",
"ウツドン",
"ウツボット",
"メノクラゲ",
"ドククラゲ",
"イシツブテ",
"イシツブテ",
"ゴローン",
"ゴローン",
"ゴローニャ",
"ゴローニャ",
"ポニータ",
"ポニータ",
"ギャロップ",
"ギャロップ",
"ヤドン",
"ヤドン",
"ヤドラン",
"ヤドラン",
"コイル",
"レアコイル",
"カモネギ",
"カモネギ",
"ドードー",
"ドードリオ",
"パウワウ",
"ジュゴン",
"ベトベター",
"ベトベター",
"ベトベトン",
"ベトベトン",
"シェルダー",
"パルシェン",
"ゴース",
"ゴースト",
"ゲンガー",
"イワーク",
"スリープ",
"スリーパー",
"クラブ",
"キングラー",
"ビリリダマ",
"ビリリダマ",
"マルマイン",
"マルマイン",
"タマタマ",
"ナッシー",
"ナッシー",
"カラカラ",
"ガラガラ",
"ガラガラ",
"サワムラー",
"エビワラー",
"ベロリンガ",
"ドガース",
"マタドガス",
"マタドガス",
"サイホーン",
"サイドン",
"ラッキー",
"モンジャラ",
"ガルーラ",
"タッツー",
"シードラ",
"トサキント",
"アズマオウ",
"ヒトデマン",
"スターミー",
"バリヤード",
"バリヤード",
"ストライク",
"ルージュラ",
"エレブー",
"ブーバー",
"カイロス",
"ケンタロス",
"コイキング",
"ギャラドス",
"ラプラス",
"メタモン",
"イーブイ",
"シャワーズ",
"サンダース",
"ブースター",
"ポリゴン",
"オムナイト",
"オムスター",
"カブト",
"カブトプス",
"プテラ",
"カビゴン",
"フリーザー",
"フリーザー",
"サンダー",
"サンダー",
"ファイヤー",
"ファイヤー",
"ミニリュウ",
"ハクリュー",
"カイリュー",
"ミュウツー",
"ミュウ",
"チコリータ",
"ベイリーフ",
"メガニウム",
"ヒノアラシ",
"マグマラシ",
"バクフーン",
"バクフーン",
"ワニノコ",
"アリゲイツ",
"オーダイル",
"オタチ",
"オオタチ",
"ホーホー",
"ヨルノズク",
"レディバ",
"レディアン",
"イトマル",
"アリアドス",
"クロバット",
"チョンチー",
"ランターン",
"ピチュー",
"ピィ",
"ププリン",
"トゲピー",
"トゲチック",
"ネイティ",
"ネイティオ",
"メリープ",
"モココ",
"デンリュウ",
"キレイハナ",
"マリル",
"マリルリ",
"ウソッキー",
"ニョロトノ",
"ハネッコ",
"ポポッコ",
"ワタッコ",
"エイパム",
"ヒマナッツ",
"キマワリ",
"ヤンヤンマ",
"ウパー",
"ヌオー",
"エーフィ",
"ブラッキー",
"ヤミカラス",
"ヤドキング",
"ヤドキング",
"ムウマ",
"アンノーン",
"ソーナンス",
"キリンリキ",
"クヌギダマ",
"フォレトス",
"ノコッチ",
"グライガー",
"ハガネール",
"ブルー",
"グランブル",
"ハリーセン",
"ハリーセン",
"ハッサム",
"ツボツボ",
"ヘラクロス",
"ニューラ",
"ニューラ",
"ヒメグマ",
"リングマ",
"マグマッグ",
"マグカルゴ",
"ウリムー",
"イノムー",
"サニーゴ",
"サニーゴ",
"テッポウオ",
"オクタン",
"デリバード",
"マンタイン",
"エアームド",
"デルビル",
"ヘルガー",
"キングドラ",
"ゴマゾウ",
"ドンファン",
"ポリゴン2",
"オドシシ",
"ドーブル",
"バルキー",
"カポエラー",
"ムチュール",
"エレキッド",
"ブビィ",
"ミルタンク",
"ハピナス",
"ライコウ",
"エンテイ",
"スイクン",
"ヨーギラス",
"サナギラス",
"バンギラス",
"ルギア",
"ホウオウ",
"セレビィ",
"キモリ",
"ジュプトル",
"ジュカイン",
"アチャモ",
"ワカシャモ",
"バシャーモ",
"ミズゴロウ",
"ヌマクロー",
"ラグラージ",
"ポチエナ",
"グラエナ",
"ジグザグマ",
"ジグザグマ",
"マッスグマ",
"マッスグマ",
"ケムッソ",
"カラサリス",
"アゲハント",
"マユルド",
"ドクケイル",
"ハスボー",
"ハスブレロ",
"ルンパッパ",
"タネボー",
"コノハナ",
"ダーテング",
"スバメ",
"オオスバメ",
"キャモメ",
"ペリッパー",
"ラルトス",
"キルリア",
"サーナイト",
"アメタマ",
"アメモース",
"キノココ",
"キノガッサ",
"ナマケロ",
"ヤルキモノ",
"ケッキング",
"ツチニン",
"テッカニン",
"ヌケニン",
"ゴニョニョ",
"ドゴーム",
"バクオング",
"マクノシタ",
"ハリテヤマ",
"ルリリ",
"ノズパス",
"エネコ",
"エネコロロ",
"ヤミラミ",
"クチート",
"ココドラ",
"コドラ",
"ボスゴドラ",
"アサナン",
"チャーレム",
"ラクライ",
"ライボルト",
"プラスル",
"マイナン",
"バルビート",
"イルミーゼ",
"ロゼリア",
"ゴクリン",
"マルノーム",
"キバニア",
"サメハダー",
"ホエルコ",
"ホエルオー",
"ドンメル",
"バクーダ",
"コータス",
"バネブー",
"ブーピッグ",
"パッチール",
"ナックラー",
"ビブラーバ",
"フライゴン",
"サボネア",
"ノクタス",
"チルット",
"チルタリス",
"ザングース",
"ハブネーク",
"ルナトーン",
"ソルロック",
"ドジョッチ",
"ナマズン",
"ヘイガニ",
"シザリガー",
"ヤジロン",
"ネンドール",
"リリーラ",
"ユレイドル",
"アノプス",
"アーマルド",
"ヒンバス",
"ミロカロス",
"ポワルン",
"ポワルン",
"ポワルン",
"ポワルン",
"カクレオン",
"カゲボウズ",
"ジュペッタ",
"ヨマワル",
"サマヨール",
"トロピウス",
"チリーン",
"アブソル",
"ソーナノ",
"ユキワラシ",
"オニゴーリ",
"タマザラシ",
"トドグラー",
"トドゼルガ",
"パールル",
"ハンテール",
"サクラビス",
"ジーランス",
"ラブカス",
"タツベイ",
"コモルー",
"ボーマンダ",
"ダンバル",
"メタング",
"メタグロス",
"レジロック",
"レジアイス",
"レジスチル",
"ラティアス",
"ラティオス",
"カイオーガ",
"カイオーガ",
"グラードン",
"グラードン",
"レックウザ",
"ジラーチ",
"デオキシス",
"ナエトル",
"ハヤシガメ",
"ドダイトス",
"ヒコザル",
"モウカザル",
"ゴウカザル",
"ポッチャマ",
"ポッタイシ",
"エンペルト",
"ムックル",
"ムクバード",
"ムクホーク",
"ビッパ",
"ビーダル",
"コロボーシ",
"コロトック",
"コリンク",
"ルクシオ",
"レントラー",
"スボミー",
"ロズレイド",
"ズガイドス",
"ラムパルド",
"タテトプス",
"トリデプス",
"ミノムッチ",
"ミノマダム",
"ミノマダム",
"ミノマダム",
"ガーメイル",
"ミツハニー",
"ビークイン",
"パチリス",
"ブイゼル",
"フローゼル",
"チェリンボ",
"チェリム",
"カラナクシ",
"トリトドン",
"エテボース",
"フワンテ",
"フワライド",
"ミミロル",
"ミミロップ",
"ムウマージ",
"ドンカラス",
"ニャルマー",
"ブニャット",
"リーシャン",
"スカンプー",
"スカタンク",
"ドーミラー",
"ドータクン",
"ウソハチ",
"マネネ",
"ピンプク",
"ペラップ",
"ミカルゲ",
"フカマル",
"ガバイト",
"ガブリアス",
"ゴンベ",
"リオル",
"ルカリオ",
"ヒポポタス",
"カバルドン",
"スコルピ",
"ドラピオン",
"グレッグル",
"ドクロッグ",
"マスキッパ",
"ケイコウオ",
"ネオラント",
"タマンタ",
"ユキカブリ",
"ユキノオー",
"マニューラ",
"ジバコイル",
"ベロベルト",
"ドサイドン",
"モジャンボ",
"エレキブル",
"ブーバーン",
"トゲキッス",
"メガヤンマ",
"リーフィア",
"グレイシア",
"グライオン",
"マンムー",
"ポリゴンZ",
"エルレイド",
"ダイノーズ",
"ヨノワール",
"ユキメノコ",
"ロトム",
"ロトム",
"ロトム",
"ロトム",
"ロトム",
"ロトム",
"ユクシー",
"エムリット",
"アグノム",
"ディアルガ",
"パルキア",
"ヒードラン",
"レジギガス",
"ギラティナ",
"クレセリア",
"フィオネ",
"マナフィ",
"ダークライ",
"シェイミ",
"シェイミ",
"アルセウス",
"ビクティニ",
"ツタージャ",
"ジャノビー",
"ジャローダ",
"ポカブ",
"チャオブー",
"エンブオー",
"ミジュマル",
"フタチマル",
"ダイケンキ",
"ダイケンキ",
"ミネズミ",
"ミルホッグ",
"ヨーテリー",
"ハーデリア",
"ムーランド",
"チョロネコ",
"レパルダス",
"ヤナップ",
"ヤナッキー",
"バオップ",
"バオッキー",
"ヒヤップ",
"ヒヤッキー",
"ムンナ",
"ムシャーナ",
"マメパト",
"ハトーボー",
"ケンホロウ",
"シママ",
"ゼブライカ",
"ダンゴロ",
"ガントル",
"ギガイアス",
"コロモリ",
"ココロモリ",
"モグリュー",
"ドリュウズ",
"タブンネ",
"ドッコラー",
"ドテッコツ",
"ローブシン",
"オタマロ",
"ガマガル",
"ガマゲロゲ",
"ナゲキ",
"ダゲキ",
"クルミル",
"クルマユ",
"ハハコモリ",
"フシデ",
"ホイーガ",
"ペンドラー",
"モンメン",
"エルフーン",
"チュリネ",
"ドレディア",
"ドレディア",
"バスラオ",
"メグロコ",
"ワルビル",
"ワルビアル",
"ダルマッカ",
"ダルマッカ",
"ヒヒダルマ",
"ヒヒダルマ",
"ヒヒダルマ",
"ヒヒダルマ",
"マラカッチ",
"イシズマイ",
"イワパレス",
"ズルッグ",
"ズルズキン",
"シンボラー",
"デスマス",
"デスマス",
"デスカーン",
"プロトーガ",
"アバゴーラ",
"アーケン",
"アーケオス",
"ヤブクロン",
"ダストダス",
"ゾロア",
"ゾロア",
"ゾロアーク",
"ゾロアーク",
"チラーミィ",
"チラチーノ",
"ゴチム",
"ゴチミル",
"ゴチルゼル",
"ユニラン",
"ダブラン",
"ランクルス",
"コアルヒー",
"スワンナ",
"バニプッチ",
"バニリッチ",
"バイバニラ",
"シキジカ",
"メブキジカ",
"エモンガ",
"カブルモ",
"シュバルゴ",
"タマゲタケ",
"モロバレル",
"プルリル",
"ブルンゲル",
"ママンボウ",
"バチュル",
"デンチュラ",
"テッシード",
"ナットレイ",
"ギアル",
"ギギアル",
"ギギギアル",
"シビシラス",
"シビビール",
"シビルドン",
"リグレー",
"オーベム",
"ヒトモシ",
"ランプラー",
"シャンデラ",
"キバゴ",
"オノンド",
"オノノクス",
"クマシュン",
"ツンベアー",
"フリージオ",
"チョボマキ",
"アギルダー",
"マッギョ",
"マッギョ",
"コジョフー",
"コジョンド",
"クリムガン",
"ゴビット",
"ゴルーグ",
"コマタナ",
"キリキザン",
"バッフロン",
"ワシボン",
"ウォーグル",
"ウォーグル",
"バルチャイ",
"バルジーナ",
"クイタラン",
"アイアント",
"モノズ",
"ジヘッド",
"サザンドラ",
"メラルバ",
"ウルガモス",
"コバルオン",
"テラキオン",
"ビリジオン",
"トルネロス",
"ボルトロス",
"レシラム",
"ゼクロム",
"ランドロス",
"キュレム",
"ケルディオ",
"メロエッタ",
"メロエッタ",
"ゲノセクト",
"ハリマロン",
"ハリボーグ",
"ブリガロン",
"フォッコ",
"テールナー",
"マフォクシー",
"ケロマツ",
"ゲコガシラ",
"ゲッコウガ",
"ホルビー",
"ホルード",
"ヤヤコマ",
"ヒノヤコマ",
"ファイアロー",
"コフキムシ",
"コフーライ",
"ビビヨン",
"シシコ",
"カエンジシ",
"フラベベ",
"フラエッテ",
"フラージェス",
"メェークル",
"ゴーゴート",
"ヤンチャム",
"ゴロンダ",
"トリミアン",
"ニャスパー",
"ニャオニクス",
"ヒトツキ",
"ニダンギル",
"ギルガルド",
"シュシュプ",
"フレフワン",
"ペロッパフ",
"ペロリーム",
"マーイーカ",
"カラマネロ",
"カメテテ",
"ガメノデス",
"クズモー",
"ドラミドロ",
"ウデッポウ",
"ブロスター",
"エリキテル",
"エレザード",
"チゴラス",
"ガチゴラス",
"アマルス",
"アマルルガ",
"ニンフィア",
"ルチャブル",
"デデンネ",
"メレシー",
"ヌメラ",
"ヌメイル",
"ヌメイル",
"ヌメルゴン",
"ヌメルゴン",
"クレッフィ",
"ボクレー",
"オーロット",
"バケッチャ",
"パンプジン",
"カチコール",
"クレベース",
"クレベース",
"オンバット",
"オンバーン",
"ゼルネアス",
"イベルタル",
"ジガルデ",
"ディアンシー",
"フーパ",
"フーパ",
"ボルケニオン",
"モクロー",
"フクスロー",
"ジュナイパー",
"ジュナイパー",
"ニャビー",
"ニャヒート",
"ガオガエン",
"アシマリ",
"オシャマリ",
"アシレーヌ",
"ツツケラ",
"ケララッパ",
"ドデカバシ",
"ヤングース",
"デカグース",
"アゴジムシ",
"デンヂムシ",
"クワガノン",
"マケンカニ",
"ケケンカニ",
"オドリドリ",
"オドリドリ",
"オドリドリ",
"オドリドリ",
"アブリー",
"アブリボン",
"イワンコ",
"ルガルガン",
"ヨワシ",
"ヒドイデ",
"ドヒドイデ",
"ドロバンコ",
"バンバドロ",
"シズクモ",
"オニシズクモ",
"カリキリ",
"ラランテス",
"ネマシュ",
"マシェード",
"ヤトウモリ",
"エンニュート",
"ヌイコグマ",
"キテルグマ",
"アマカジ",
"アママイコ",
"アマージョ",
"キュワワー",
"ヤレユータン",
"ナゲツケサル",
"コソクムシ",
"グソクムシャ",
"スナバァ",
"シロデスナ",
"ナマコブシ",
"タイプ:ヌル",
"シルヴァディ",
"メテノ",
"ネッコアラ",
"バクガメス",
"トゲデマル",
"ミミッキュ",
"ハギギシリ",
"ジジーロン",
"ダダリン",
"ジャラコ",
"ジャランゴ",
"ジャラランガ",
"カプコケコ",
"カプテテフ",
"カプブルル",
"カプレヒレ",
"コスモッグ",
"コスモウム",
"ソルガレオ",
"ルナアーラ",
"ウツロイド",
"マッシブーン",
"フェローチェ",
"デンジュモク",
"テッカグヤ",
"カミツルギ",
"アクジキング",
"ネクロズマ",
"ネクロズマ",
"ネクロズマ",
"ネクロズマ",
"マギアナ",
"マーシャドー",
"ベベノム",
"アーゴヨン",
"ツンデツンデ",
"ズガドーン",
"ゼラオラ",
"メルタン",
"メルメタル",
"サルノリ",
"バチンキー",
"ゴリランダー",
"ヒバニー",
"ラビフット",
"エースバーン",
"メッソン",
"ジメレオン",
"インテレオン",
"ホシガリス",
"ヨクバリス",
"ココガラ",
"アオガラス",
"アーマーガア",
"サッチムシ",
"レドームシ",
"イオルブ",
"クスネ",
"フォクスライ",
"ヒメンカ",
"ワタシラガ",
"ウールー",
"バイウールー",
"カムカメ",
"カジリガメ",
"ワンパチ",
"パルスワン",
"タンドン",
"トロッゴン",
"セキタンザン",
"カジッチュ",
"アップリュー",
"タルップル",
"スナヘビ",
"サダイジャ",
"ウッウ",
"サシカマス",
"カマスジョー",
"エレズン",
"ストリンダー",
"ヤクデ",
"マルヤクデ",
"タタッコ",
"オトスパス",
"ヤバチャ",
"ポットデス",
"ミブリム",
"テブリム",
"ブリムオン",
"ベロバー",
"ギモー",
"オーロンゲ",
"タチフサグマ",
"ニャイキング",
"サニゴーン",
"ネギガナイト",
"バリコオル",
"デスバーン",
"マホミル",
"マホイップ",
"タイレーツ",
"バチンウニ",
"ユキハミ",
"モスノウ",
"イシヘンジン",
"コオリッポ",
"イエッサン",
"モルペコ",
"ゾウドウ",
"ダイオウドウ",
"パッチラゴン",
"パッチルドン",
"ウオノラゴン",
"ウオチルドン",
"ジュラルドン",
"ドラメシヤ",
"ドロンチ",
"ドラパルト",
"ザシアン",
"ザシアン",
"ザマゼンタ",
"ザマゼンタ",
"ムゲンダイナ",
"ダクマ",
"ウーラオス",
"ウーラオス",
"ザルード",
"レジエレキ",
"レジドラゴ",
"ブリザポス",
"レイスポス",
"バドレックス",
"バドレックス",
"バドレックス",
"アヤシシ",
"バサギリ",
"ガチグマ",
"イダイトウ",
"オオニューラ",
"ハリーマン",
"ラブトロス"
    ];
    return list;
};



