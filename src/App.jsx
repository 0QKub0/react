import './App.css'

function App() {
  return (
    <div id="App">
      <nav className='nav'>
        <section className='container'>
          <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4658 8.18842C17.9342 8.18842 21.1563 8.68611 23.5858 9.52249C26.513 10.5302 28.3127 12.0577 28.3127 13.4409C28.3127 14.8822 26.4053 16.5049 23.262 17.5464C20.8855 18.3338 17.7582 18.7448 14.4658 18.7448C11.0901 18.7448 7.8935 18.359 5.49025 17.5378C2.4497 16.4985 0.618347 14.8547 0.618347 13.4409C0.618347 12.0689 2.33672 10.5533 5.22274 9.54705C7.66126 8.69687 10.9629 8.18842 14.4653 8.18842H14.4658Z" stroke="#00D8FF" stroke-width="1.23587" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89374 10.8297C11.6265 7.82508 13.6673 5.28248 15.6055 3.59573C17.9408 1.56344 20.1632 0.767542 21.3613 1.45845C22.6099 2.17849 23.0628 4.64153 22.3946 7.88476C21.89 10.3368 20.6833 13.2511 19.0384 16.1033C17.352 19.0276 15.4209 21.604 13.5091 23.2751C11.0899 25.3898 8.75098 26.1551 7.52618 25.4488C6.33768 24.7639 5.88319 22.5177 6.45334 19.5149C6.93507 16.9778 8.14401 13.8636 9.89318 10.8296L9.89374 10.8297Z" stroke="#00D8FF" stroke-width="1.23587" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.89694 16.1109C8.15926 13.1097 6.97617 10.0713 6.48233 7.5497C5.88788 4.51152 6.30818 2.1886 7.50522 1.49569C8.75263 0.773529 11.1127 1.61124 13.5888 3.80986C15.4609 5.4721 17.3833 7.97252 19.033 10.822C20.7242 13.7435 21.9918 16.7032 22.4849 19.1941C23.1089 22.3463 22.6039 24.7547 21.3802 25.4631C20.1929 26.1504 18.0202 25.4227 15.7035 23.429C13.746 21.7446 11.6518 19.142 9.89694 16.1109V16.1109Z" stroke="#00D8FF" stroke-width="1.23587" />
          </svg>
          <h2>ReactFacts</h2>
        </section>
        <h2>Project 1</h2>
      </nav>
      <main className='main'>
        <section className='container'>
          <h1>Fun facts about React</h1>
          <ul className='facts'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
