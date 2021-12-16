import React from 'react';

const LiquidityPosition = (props) => {
	  const { liquidityPosition } = props;
	  return (
		      <div>
		        <div>
		  		Liquidity Position:
		  		Liquidity Token Balance: liquidityPosition.liquidityTokenBalance
		  		Pair Info:
		  			Token#1 Name: {liquidityPosition.token0.name}
		  			Token#1 Symbol: {liquidityPosition.token0.symbol}
		  			Token#2 Name: {liquidityPosition.token1.name}
		  			Token#2 Symbol: {liquidityPosition.token1.symbol}
		  			TotalSupply: liquidityPosition.totalSupply
		        </div>
		      </div>
		    );
};

export default LiquidityPosition;
