import React from "react";

function TotalBalance() {
  return (
    <div className="mt-3">
      <h1>TotalBalance</h1>
      <h3>R {totalIncome - totalExpense}</h3>
      <div className="totalBalance">
        <div>
          <h4>Income</h4>

          <h4 style={{color:'green'}}>R {totalIncome}</h4>
        </div>

        <div className="totalBalanceLine">
          <div>
            <h4>Expense</h4>

            <h4 style={{color:'red'}}>R {totalExpense}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TotalBalance;
