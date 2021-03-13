import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import EditBudgetForm from './components/EditBudgetForm';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
  	<AppProvider>
	  	<div className='container'>
	  		<h1 className='mt-3'>My Budget Planner :)</h1>
	  		<div className='row mt-3'>
	  			<div className='col-sm'>
	  				<Budget />
	  			</div>
	  			<div clssName='col-sm'>
	  				<Remaining />
	  			</div>
	  			<div className='col-sm'>
	  				<ExpenseTotal />
	  			</div>
	  		</div>
	  		<h3 className='mt-3'>Expenses</h3>
	  		<div className='row mt-3'>
	  			<div className='col-sm'>
	  				<ExpenseList /> 
	  			</div>
	  		</div>
	  		<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm />
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<EditBudgetForm />
				</div>
			</div>
	  	</div>
	 </AppProvider>
  );
};

export default App;
