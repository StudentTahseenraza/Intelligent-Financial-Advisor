document.getElementById('advisor-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const investmentGoals = document.getElementById('investment-goals').value;
    const riskTolerance = parseInt(document.getElementById('risk-tolerance').value);
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    
    const advice = getInvestmentAdvice(investmentGoals, riskTolerance, initialInvestment);
    document.getElementById('advice-output').innerText = advice;
});
