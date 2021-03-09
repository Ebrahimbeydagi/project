import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width:'100%',
        height:'100vh',
        backgroundColor:'#090d18',
        display:'flex',
        direction:'rtl',
        overflow:'hidden'
    },
    leftSide:{
        flex:'1',
        height:'40%',
        marginTop:'8rem',
        marginLeft:'8rem',
        direction:'ltr',
        fontWeight:'bolder'
    },
    cardImg:{
        width:'35%',
        height:'60%',
        margin:'auto 10rem !important',
    },
    btn1:{
        padding:'1rem !important',
        backgroundColor:'#eed316',
        marginRight:'10px',
        border:'1px solid #000',
        borderRadius:'5px',
        color:'black',
    },
    btn2:{
        padding:'1rem !important',
        border:'1px solid #eed316',
        borderRadius:'5px',
        color:'#eed316',

    }
});


export default useStyles;
