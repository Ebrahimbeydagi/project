import React from 'react';
import useStyle from "./styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const Wallet = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
                <img src={"/img/card.png"} className={classes.cardImg}/>
            <div className={classes.leftSide}>
                <p style={{fontSize:'3rem'}}>BUY THE THINGS YOU LOVE WITH <span style={{color:'#eed316'}}>CRYPTO</span></p>
                <h3>With the Binance Visa Card, you can convert and spend your favorite cryptocurrencies at more than 60
                    million merchants worldwide. Just transfer crypto from your spot wallet to your card wallet, and
                    you're ready to go. Spend your crypto anytime, anywhere.</h3>
                <h5>*Please refer to the Binance Card <a style={{color:'#eed316',textDecoration:'none'}} href={"#"}>FAQ</a> for the supported cryptocurrencies</h5>
                <ButtonBase className={classes.btn1}>Get Started</ButtonBase>
                <ButtonBase className={classes.btn2}>More Information</ButtonBase>
            </div>

        </div>
    );
};

export default Wallet;
