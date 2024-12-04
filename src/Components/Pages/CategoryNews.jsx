import { useLoaderData } from "react-router";
import NewsCard from "../NewsCard";

function CategoryNews() {
    const {data: news}  = useLoaderData();
  return (
    <div>
        <h2 className="font-semibold ml-4 mb-2">Dragon News Home</h2>

      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>

    </div>
  )
}

export default CategoryNews