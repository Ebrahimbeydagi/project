import {makeStyles} from "@material-ui/styles";

const useStyles= makeStyles({

    img:{
        width:'100%',
    },
    txt:{
        width:'100%',
        position:'absolute',
        textAlign:'center',
        top:'5vh',
    },
    converterPage:{
        position:'relative',
        margin:'5% auto',
        width:'33%',
        height:'50vh',
        border:'1px solid #9c9c9c',
        borderRadius:'5px',
    },
    firstBox:{
        height:'50px',
        border:'1px solid #9c9c9c',
        borderRadius:'5px',
        "&:hover":{border:'1px solid gold'},
    },
    secondBox:{
        height:'50px',
        border:'1px solid #9c9c9c',
        borderRadius:'5px',
        margin:'-20px 0',
        "&:hover":{border:'1px solid gold'}
    },
    firstInput:{
        width:'58%',
        padding:'15px',
        textDecoration:'none',
        borderRadius:'5px',
        border:'none',
        "&:focus":{
            outline:'unset'
        }
    },
    secondInput:{
        width:'58%',
        padding:'15px',
        textDecoration:'none',
        borderRadius:'5px',
        border:'none',
        "&:focus":{
            outline:'unset'
        }
    },
    firstBtn:{
        direction:'rtl',
        padding:'15px'
    },
    selectFirst:{
        width:'20%',
        position:'absolute',
        right:'30px !important',
        top:'12.5% !important',
        padding:'0 30px',
        textAlign:'left',
    },
    selectSecond:{
        width:'20%',
        position:'absolute',
        right:'30px !important',
        top:'38.5% !important',
        padding:'0 30px',
        textAlign:'left',
    },
    ConvertBtn:{
        position:'absolute',
        height:'50px !important',
        borderRadius:'5px !important',
        width:'100% !important',
        color:'black !important',
        backgroundImage: 'linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%)',
        marginTop:'20% !important',
        "&:hover":{
            backgroundColor:'gold !important'
        },
        cursor:'pointer !important',
    },

    from:{
        color:'#9c9c9c'  ,
        margin:0

    },
    to:{
        color:'#9c9c9c'  ,

    }



})

export default useStyles;
