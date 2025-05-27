const Body = () => {
    return(
        <>
<div className="row">

    <div className="leftcolumn ">
        <div className="card">
            <h2>title heading</h2>
            <h5>Title description...</h5>
            <div className="fakeimg h200">image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div className="card">
            <h2>title heading</h2>
            <h5>Title description...</h5>
            <div className="fakeimg h200">image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>

    </div>{/*leftcolumn end*/}

    <div className="rightcolumn ">
        <div className="card">
            <h2>About me</h2>
            <div className="fakeimg h100">Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>

        <div className="card">
           <h3>Popular Post</h3>
            <div className="fakeimg h100">Image</div><br/>
            <div className="fakeimg h100">Image</div><br/>
            <div className="fakeimg h100">Image</div>
        </div>

        <div className="card">
           <h3>Follow Me</h3>
           <p>Some text..</p>
        </div>
        
    </div>{/*rightcolumn end*/}
</div>        
        </>
    )
}
export default Body;