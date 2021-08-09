export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-5 bg-white shadow">
        <div>
          <h4 className="font-bold lg:text-lg">Welcome back, Thomas</h4>
        </div>

        <div>
          <ul className="flex items-center justify-center">
            <li>
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Someone's profile"
                className="h-10 w-10 rounded-full border-2 border-pink-600"
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
