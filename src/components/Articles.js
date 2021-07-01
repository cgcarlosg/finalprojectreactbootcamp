import React from ("react");
import {connect} from "react-redux";


const Articles = ({articles}) => (
<section>
    <h2>Articles</h2>
    <div className="articles-container">
       {
           jugadores.map(j=>{
            <article>
            <h3></h3>
            <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </article>
           })
       }
    </div>

</section>
)

const mapStateToProps = state => ({
    articles: state.articles
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles)