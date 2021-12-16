import React from 'react';
import LiquidityPosition from './LiquidityPosition';

const LiquidityPositionList = () => {
  const liquidityPositionToRender = [
      {
        "liquidityTokenBalance": "31.400659731032732808",
        "pair": {
          "token0": {
            "name": "Deflating Test Token",
            "symbol": "DTT"
          },
          "token1": {
            "name": "Wrapped Ether",
            "symbol": "WETH"
          },
          "totalSupply": "31.400659731032732808"
        }
      },
      {
        "liquidityTokenBalance": "4488.535018687882888582",
        "pair": {
          "token0": {
            "name": "Kittiefight",
            "symbol": "KTY"
          },
          "token1": {
            "name": "Wrapped Ether",
            "symbol": "WETH"
          },
          "totalSupply": "5557.800321327665087603"
        }
      },
      {
        "liquidityTokenBalance": "1069.265302639782199021",
        "pair": {
          "token0": {
            "name": "Kittiefight",
            "symbol": "KTY"
          },
          "token1": {
            "name": "Wrapped Ether",
            "symbol": "WETH"
          },
          "totalSupply": "5557.800321327665087603"
        }
      },
      {
        "liquidityTokenBalance": "31622.776601683793319305",
        "pair": {
          "token0": {
            "name": "Awesome Token",
            "symbol": "AWT"
          },
          "token1": {
            "name": "dai",
            "symbol": "DAI"
          },
          "totalSupply": "31622.776601683793319305"
        }
      },
      {
        "liquidityTokenBalance": "366.501222995165573337",
        "pair": {
          "token0": {
            "name": "Dai",
            "symbol": "DAI"
          },
          "token1": {
            "name": "Wrapped Ether",
            "symbol": "WETH"
          },
          "totalSupply": "394.205682965784036469"
        }
      }
  ];

  return (
    <div>
      {liquidityPositionToRender.map((liquidityPosition) => (
        <LiquidityPosition key={liquidityPosition.id} liquidityPosition={liquidityPosition} />
      ))}
    </div>
  );
};

export default LiquidityPositionList;
