function getInvestmentAdvice(goals, riskTolerance, initialInvestment) {
    const riskProfile = riskProfiles.find(profile => profile.riskLevel === riskTolerance);
    if (!riskProfile) {
        return 'Invalid risk tolerance level.';
    }

    const estimatedGrowth = marketTrends.reduce((acc, trend) => acc + trend.growth, 0) / marketTrends.length;
    const projectedValue = initialInvestment * (1 + estimatedGrowth);

    const advice = `
        Based on your goals (${goals}) and risk tolerance (${riskProfile.description}), we suggest the following portfolio:
        - Stocks: ${riskProfile.allocation.stocks}%
        - Bonds: ${riskProfile.allocation.bonds}%
        With an initial investment of $${initialInvestment}, your projected value in a year is approximately $${projectedValue.toFixed(2)}.
    `;
    
    return advice;
}
