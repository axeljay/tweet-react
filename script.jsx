class ListItem extends React.Component {
    render() {
        return (
          <div>
            <h2>{this.props.screen_name}</h2>
            <p><img src={this.props.img}/></p>
            <p>Tweet: {this.props.text}</p>
            <p>No. of followers: {this.props.followers_count}</p>
          </div>
        );
    }
}

// render() {
//   return (

//     <div>
//       <p>foo</p>
//       <p>bar</p>
//       <p>baz</p>
//     </div>
//   );
// }

class Tweets extends React.Component {
    render() {

      let tweet = this.props.items.map( item => {
              return <ListItem screen_name ={item.user.screen_name} img = {item.user.profile_image_url} text = {item.text} followers_count = {item.user.followers_count} ></ListItem>;
      });


        // console.log("inside of component:", this.props.items );
        // let itemsElements = this.props.items.map( (item, index) => {
        //           return <ListItem item={item} key={index}></ListItem>;
        //         });
        // console.log( "items elemetns",itemsElements );

        return (
          <ul>
            {tweet}
          </ul>
        );
    }
}

ReactDOM.render(
    <div>
    <Tweets = {tweets} />
    </div>,
    document.getElementById('root')
);
console.log("check")
