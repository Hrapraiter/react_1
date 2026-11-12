import './Article.css';
import Card from './Card';

function Article(props)
{
    return(
        <article>
            {
                Object.keys(props.db).map
                (
                    index =>
                        {
                            //return(console.log(props.db[index]))
                            return (<Card human={props.db[index]} photo={props.photos.at(index)} />)                        
                        }
                )
                //console.log(props)
            }
            
        </article>
    )
}
export default Article;