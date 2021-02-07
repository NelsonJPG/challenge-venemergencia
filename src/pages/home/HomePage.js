import { useHistory } from "react-router-dom";

const HomePage = (props) => {
    let history = useHistory();

   const handleClick = () => history.push("/users");

    return (
        <>
        <header className="header-container">
            <div className="header-text container">
                <h2>Be Smart Take Card</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn-outline" onClick={handleClick} >Apply for card</button>
            </div>
        </header>
        <main>
            <div className="container center position-relative">
                <img className="flex-image-top" src="https://via.placeholder.com/300" alt="test" />
                <div className="col-12">
                    <h2>Get Your Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="row p-t">
                    <div className="col-4 p-x">
                        <div className="box">
                            <img src="https://via.placeholder.com/50" alt="test-icon"/>
                            <h2>Get Your Card</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                    <div className="col-4 p-x">
                        <div className="box box-shadow">
                            <img src="https://via.placeholder.com/50" alt="test-icon"/>
                            <h2>Get Your Card</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="col-4 p-x">
                        <div className="box">
                            <img src="https://via.placeholder.com/50" alt="test-icon"/>
                            <h2>Get Your Card</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

/*-
HomePage.propTypes = {

}
*/

export default HomePage

