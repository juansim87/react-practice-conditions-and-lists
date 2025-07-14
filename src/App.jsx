
import './App.css'
import { AddFruitForm } from './components/AddFruitForm/AddFruitForm'
import { DynamicShoppingList } from './components/DynamicShoppingList/DynamicShoppingList'
import { EditableList } from './components/EditableList/EditableList'
import { NameList } from './components/NameList/NameList'
import { OrderManager } from './components/OrderManager/OrderManager'
import { ProductList } from './components/ProductList/ProductList'
import { RemoveItemList } from './components/RemoveItemList/RemoveItemList'
import { TaskList } from './components/TaskList/TaskList'
import { ToggleItemsList } from './components/ToggleItemsList/ToggleItemsList'

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
     <ToggleItemsList/>
     <EditableList/>
     <OrderManager/>
    </>
  )
}

export default App
