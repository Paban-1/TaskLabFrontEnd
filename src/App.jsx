import { Provider } from "react-redux"
import { store } from './app/store'
import { PagesRoutes } from "./constent"

function App() {

  return (
    <>
      <Provider store={store}>
        <PagesRoutes />
      </Provider>
    </>
  )
}

export default App
