
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { signin } from "../../actions/userActions";



export default function SigninScreen(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;


                                                                                                const dispatch = useDispatch();
                                                                                                const                                           submitHandler = (e) => {
                                       e.preventDefault();
                                                                                                    dispatch(signin(          email, password));
                                                                                                };
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Email' required
                        onChange={e=> setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Senha</label>
                    <input type='password' id='password' placeholder='Senha' required
                        onChange={e=> setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>Sign In</button>

                </div>
                <div>
                    <label />
                    <div>
                        Novo usuário? {' '}
                        <Link to='/register'>Crie sua conta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}