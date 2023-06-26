/* eslint-disable react/prop-types */
const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-[4.2rem]">
      {children}
    </div>
  )
}

export {Layout}