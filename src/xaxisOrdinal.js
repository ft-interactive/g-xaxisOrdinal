export default function() {
	let tickSize = 0;


    function axis(parent) {

        
    }

    axis.tickSize = (d)=>{
        if(d===undefined) return tickSize
        tickSize=d;
        return axis;
    }
        
    return axis
};
