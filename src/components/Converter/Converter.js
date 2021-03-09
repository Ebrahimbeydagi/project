import React from "./Select";
import useStyles from "./styles";
import {ButtonBase} from "@material-ui/core";
import Conversion from "./Select";

const Converter = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <img className={classes.img} src={"/img/converter-img.png"}/>
                <div className={classes.txt}>
                    <h1>Convert & OTC Portal</h1>
                    <h3>Trade Bitcoin, BNB, and other Cryptocurrencies easily in one go</h3>
                </div>
            </div>
            <div className={classes.converterPage}>
                <div style={{flex: '1', margin: '20px'}}>
                    <h5 className={classes.from}>From</h5>
                    <div className={classes.firstBox}>
                        <input id={'inp-2'} className={classes.firstInput} placeholder={'--'} type={'number'}/>
                        <div className={classes.selectFirst}>
                            <Conversion/>
                        </div>
                    </div>
                    <h5 className={classes.to}>To</h5>
                    <div className={classes.secondBox}>
                        <input className={classes.secondInput} placeholder={'--'} value=""/>
                        <div className={classes.selectSecond}>
                            <Conversion/>
                        </div>
                    </div>
                    <div style={{position: 'relative'}}>
                        <ButtonBase id={'btn'} className={classes.ConvertBtn}>Conversion</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter;
