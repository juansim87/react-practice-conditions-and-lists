
import './App.css'
import { AddFruitForm } from './components/AddFruitForm/AddFruitForm'
import { DynamicShoppingList } from './components/DynamicShoppingList/DynamicShoppingList'
import { NameList } from './components/NameList/NameList'
import { ProductList } from './components/ProductList/ProductList'
import { RemoveItemList } from './components/RemoveItemList/RemoveItemList'
import { TaskList } from './components/TaskList/TaskList'

function App() {
 

  return (
    <>
    <h1>Ejercicios de condicionales y listas</h1>
     <NameList/>
     <ProductList/>
     <TaskList/>
     <AddFruitForm/>
     <RemoveItemList/>
     <DynamicShoppingList/>
    </>
  )
}

export default App
