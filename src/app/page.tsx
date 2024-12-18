import Link from '@/cpmponents/Link/Link'

export default function Home() {
  return (
    <div className="container">
      <h1>毎日の献立を簡単に！</h1>
      <p>
        アプリがあなたの冷蔵庫ややる気に合わせて、今日の献立を提案します。必要な材料や調理方法も一目で確認できます。
      </p>
      <Link href="/recipe-search">献立を提案してもらう</Link>
    </div>
  )
}
