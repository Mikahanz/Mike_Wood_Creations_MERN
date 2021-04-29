import {Request, Response, NextFunction} from 'express'
import ErrorResponse from '../utils/errorResponse'
import chalk from 'chalk'

const notFoundError = (req: Request, res: Response, next: NextFunction) => {

    console.log(chalk.red.underline('Not Found - 404 Error!!!'));

    const error = new Error(`${req.originalUrl} Not Found`);

    res.status(404).json({message: `Not Found - 404`});
    next(error);
};

const allErrorsHandler = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    console.log(chalk.hex('#FFA500').underline(`${err.name}!`))

    let error = {...err};

    error.message = err.message; 

    if(err.name === 'CastError'){
        error = new ErrorResponse(`Resource Not Found!`, 404 )
    }

    // Response to client
    res.status(error.statusCode ?? 500 ).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production'? null : error.stack
    });
    next();
}

export {notFoundError, allErrorsHandler};