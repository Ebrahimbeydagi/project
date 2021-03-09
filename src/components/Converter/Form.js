import React, {Component} from 'react';



class Conversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            colours: {}
        };
    }

    componentDidMount() {
        this.setState({
            coins: [
                {id: 'BTC'},
                {id: 'BNB'},
                {id: 'ETH'}
            ]
        });
    }

    render() {
        const {coins} = this.state;
        const coinsList = coins.length > 0
            && coins.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.id}</option>
                )
            }, this);
        return (
            <div>
                <select
                    style={{
                        position: 'absolute',
                        border: 'none',
                        borderLeft: '1px #9c9c9c solid',
                        padding: 8,
                        right: 5,
                        top: 4,
                        width: '30%',
                        backgroundColor: 'unset'
                    }}>
                    {coinsList}
                </select>
            </div>
        );
    }
}

/////////////////////////////////////////

class Form extends React.Component {
    constructor(props) {
        super(props);
        const {data} = this.props;
        const {enteredAmount: defaultAmount} = data;

        this.state = {
            enteredAmount: defaultAmount,
            showData: false,
            showButton: false,
            showButtonName: "Conversion"
        };

        this.handleOnchage = this.handleOnchage.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleOnchage(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });

        /** Hiding if user changes the form data */
        const {showData} = this.state;
        if (showData) {
            this.setState(prevState => ({
                showData: !prevState.showData,
                showButton: !prevState.showButton,
            }));
        }
    }

    checkSaveButtton() {
        const {enteredAmount: defaultAmount} = this.props.data;
        const {enteredAmount} = this.state;
        const changed = enteredAmount !== defaultAmount && enteredAmount !== '' && enteredAmount >= 0.002;
        return changed ? false : true;
    }


    handleSave(e) {
        e.preventDefault();
        this.setState(prevState => ({
            showButton: !prevState.showButton,
            showButtonName: "Converting..."
        }));

        /** Mocking we updating the API and using the response to update the state */
        setTimeout(() => {
            this.setState(prevState => ({
                showData: !prevState.showData,
                showButtonName: "Conversion"
            }));
        }, 1000);
    }

    render() {
        const {
            enteredAmount,
            showData,
            showButton,
            showButtonName
        } = this.state;
        const findButtonStatus = showButton || this.checkSaveButtton();
        const renderButton = (
            <button
                type="submit"
                onClick={this.handleSave}
                disabled={findButtonStatus}
            >
                {showButtonName}
            </button>
        );
        const answer = (
            <p className="showData">
                {enteredAmount}
            </p>
        );

        const displayAnswer = showData ? answer : null;
        return (

            <div id={"div"}>
                <form>
                    <label id={"label"}> From : </label>
                    <div id={"FirstInput"}>
                        <input
                            placeholder={'Enter amount'}
                            type="number"
                            name="enteredAmount"
                            value={enteredAmount}
                            onChange={this.handleOnchage}
                        />

                        <Conversion/>

                    </div>
                    <div style={{height: '20px', Top: 0,}}>
                        <p id={"errItem"}>sdjfhslfksdhfsl</p>
                    </div>
                    <label id={"label"}> To : </label>
                    <div id={"answer"}>
                        <div class={"answerSelector"}>
                            <Conversion/>
                        </div>
                        {displayAnswer}
                    </div>
                    <br/>
                    {renderButton}
                </form>
                <p>{this.change}</p>

            </div>
        );
    }
}


export default Form;
