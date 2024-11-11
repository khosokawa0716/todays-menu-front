import Link from '@/cpmponents/Link/Link'

export default function RecipeSearch() {
  return (
    <div className="container">
      <h1>レシピ検索</h1>
      <p>
        アプリがあなたの冷蔵庫ややる気に合わせて、今日の献立を提案します。必要な材料や調理方法も一目で確認できます。
      </p>
      <Link href="/">ホーム画面</Link>
    </div>
  )
}