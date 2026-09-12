<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Register a new normal user.
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:100',
            ],

            'email' => [
                'required',
                'email',
                'max:150',
                'unique:users,email',
            ],

            'password' => [
                'required',
                'string',
                'min:8',
                'confirmed',
            ],
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make(
                $validated['password']
            ),

            // Un usuario nunca puede registrarse
            // a sí mismo como administrador.
            'role' => 'user',
        ]);

        $token = $user
            ->createToken('nexalearn-token')
            ->plainTextToken;

        return response()->json([
            'message' => 'Usuario registrado correctamente.',
            'user' => $user,
            'token' => $token,
        ], 201);
    }


    /**
     * Login.
     */
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => [
                'required',
                'email',
            ],

            'password' => [
                'required',
                'string',
            ],
        ]);

        $user = User::where(
            'email',
            $validated['email']
        )->first();


        if (
            !$user ||
            !Hash::check(
                $validated['password'],
                $user->password
            )
        ) {
            throw ValidationException::withMessages([
                'email' => [
                    'Las credenciales son incorrectas.'
                ],
            ]);
        }


        $token = $user
            ->createToken('nexalearn-token')
            ->plainTextToken;


        return response()->json([
            'message' => 'Inicio de sesión correcto.',
            'user' => $user,
            'token' => $token,
        ]);
    }


    /**
     * Return authenticated user.
     */
    public function me(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }


    /**
     * Logout current session.
     */
    public function logout(Request $request)
    {
        $request
            ->user()
            ->currentAccessToken()
            ->delete();


        return response()->json([
            'message' => 'Sesión cerrada correctamente.',
        ]);
    }
}