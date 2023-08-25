<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;



class UserController extends Controller
{

    function register(Request $request)
    {
        $valid = validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string',
        ]);

        if ($valid->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $valid->errors()
            ]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        if ($user->save()) {

            // $token = $user->createToken('my-app-token')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'Registered successfully',
                'save' => $user
            ], 200);
        }else {
            return response()->json([
                'status' => false,
                'message' => 'Registered failed',
                'save' => null
            ], 401);
        }
    }

    function login(Request $request)
    {
        $valid = validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($valid->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'data' => $valid->errors()
            ]);
        }

        $user = User::where('email', $request->email)->first();
        $username = $user->name;
        $useremail = $user->email;

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $user->tokens()->delete();
                $token = $user->createToken('Auth_Token')->plainTextToken;
                $data = [
                    'user' => $user,
                    'token' => $token,
                    'name' => $username,
                    'useremail' => $useremail
                ];

                return response()->json([
                    'status' => true,
                    'message' => 'Login successfully',
                    'data' => $data,
                ], 200);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid Credentials',
                    'data' => null
                ], 401);
            }
        }
    }
    
    function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' => 'Logout successfully',
            'data' => null
            ], 200);
    }

    
}
