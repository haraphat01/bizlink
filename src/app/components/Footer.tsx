export default function Footer() {
  return (
    <footer className=" text-white p-4 text-center">
      <div className="flex justify-center items-center">
        <a href="#" className="text-teal-200 hover:text-white mr-4">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-teal-200 hover:text-white mr-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-teal-200 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="mt-4">&copy; 2023 Bizlink</p>
    </footer>
  );
}
