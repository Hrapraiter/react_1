import './Nav.css';
function Nav(props)
{
    console.log(props);
    return(
        <nav>
            <ul>
                {
                    Object.keys(props.nav).map
                    (
                        element =>
                        {
                            return(
                                <li key={element}>
                                    <a href={props.nav[element]}>{element}</a>
                                </li>
                            )
                        }   
                    )
                }
            </ul>
        </nav>
    )
}
export default Nav;