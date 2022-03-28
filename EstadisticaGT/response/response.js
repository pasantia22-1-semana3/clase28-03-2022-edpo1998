export const response ={
    succes:(req,res,message,status) =>{
        let statusCode = status || 200;
        let data = message || '';
        res.status(statusCode).send({
            error: false,
            status: statusCode,
            body: data
        })

    },
    error:(req,res,message,status) =>{
        let statusCode = status || 500;
        let data = message || 'Interval server error';
        res.status(statusCode).send({
            error: true,
            status: statusCode,
            body: message
        })
    }
}