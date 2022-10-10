import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function TodoList(props) {

    const renderFunc = props.render || props.children

    return (
        <section className="TodoList-container">
            
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {( !!props.totalTodos && !props.searchedTodos.length )  && props.onEmptySearchResult(props.searchText) }
    
            <ul>
                {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
            </ul>
        </section>
    );
  }

export { TodoList };