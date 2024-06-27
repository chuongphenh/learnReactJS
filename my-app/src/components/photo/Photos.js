import React, { useEffect, useState } from "react";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// Khi sử dụng useEffect mà không truyền dependencies thì useEffect sẽ chạy mỗi khi component render
// Khi sử dụng useEffect mà truyền dependencies là mảng rỗng thì useEffect sẽ chạy 1 lần duy nhất sau khi component render
// Khi sử dụng useEffect mà truyền dependencies là 1 mảng các biến thì useEffect sẽ chạy mỗi khi 1 trong các biến trong mảng dependencies thay đổi
// Khi state thay đổi thì component render lại
const Photos = () => {
  // useEffect là 1 hook của react giúp thực thi các side effect
  // // cấu trúc: useEffect(callback, dependencies)
  // useEffect(function callback() {
  //     // code trong function callback được gọi là side effect
  // }, []);
  // // cách viết rút gọn
  // useEffect(() => {

  // }, []);
  //* https://picsum.photos/v2/list
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const handleLoadMorePhotos = async () => {
    const images = await getRandomPhotos(page);
    const newImages = [...randomPhotos, ...images];
    setRandomPhotos(newImages);
    setPage(page + 1);
  };

  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((photo) => (
            <div key={photo.id} className="bg-gray-200 p-5 rounded-lg">
              <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMorePhotos}
          className="inline-block px-8 py-4 bg-purple-500 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
