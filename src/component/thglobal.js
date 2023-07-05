const ThGlobal = (props) =>{
    const borderStyle =(border)=>{
        let bcolor = (border.color)?border.color:'';
        let width = (border.width)?border.width:'';
        let style = (border.style)?border.style:'';
        const newBorder = `${bcolor} ${width} ${style}`;
        return newBorder;
    }

    const border = ()=>{
         const styles = {};
        if(props.style.top){
            styles.borderTop = borderStyle(props.style.top);
            styles.borderBottom = borderStyle(props.style.bottom);
            styles.borderLeft = borderStyle(props.style.left);
            styles.borderRight = borderStyle(props.style.right);
        }else{
            styles.border = borderStyle(props.style);
        }
        return styles;
    }

    const renderSwitch = (param='') => {
        switch(props.type) {
          case 'border':
            return border;
          default:
            return 'foo';
        }
      }

      return renderSwitch();
}

export default ThGlobal;
