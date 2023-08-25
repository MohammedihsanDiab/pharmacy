<?php

namespace App\Http\Controllers;

use Storage;
use App\Models\User;
use App\Models\comment;
use App\Models\medicine;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class medicineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return medicine::all();
    }

    public function indexx() {
        return response()->json(medicine::all());
    }

    public function singelindex(Request $request ,string $id)
    {
        $medicine = medicine::find($id);
        if ($medicine) {
            return response()->json([
                "status" => true,
                "message" => "medicine data retuned",
                "data" => $medicine
            ], 200);
        } else {
            return response()->json([
                "status" => false,
                "message" => "medicine Not Found",
                "data" => []
            ], 401);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

public function sendEmail(Request $request)
{
    $rules = [
        'name' => 'required',
        'email' => 'required|email',
        'subject' => 'required',
        'message' => 'required',
    ];

    $validator = Validator::make($request->all(), $rules);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }
    else{

        $name = $request->name;
        $email = $request->email;
        $subject = $request->subject;
        $message = $request->message;

        Mail::to('azazaz5172263@gmail.com')->send(new ContactMail($name, $email, $subject, $message)); 
        return response()->json(['message' => 'Email sent successfully'], 200);
    }

    // Form data is valid, proceed with sending the email
    // ...

   
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $valid = Validator::make($request->all(),
            [
                'title' => 'required|max:50|min:2',
                'name' => 'required|max:255|min:2',
                'price' => 'required|max:10000',
                'category' => 'required',
                'img' => 'required'
            ]
        );
        if ($valid->fails()) {
            return response()->json([
                "status" => false,
                "message" => "medicine created failed",
                "data" => [
                    'errors' => $valid->errors(),
                ]
            ]);
        }
        
        // $img = $request->file('img')->store('uploades');
        $img = $request->file("img");
        $image_name = $img->getClientOriginalName();
        $image_name = time() . '_' . $image_name;
        $img->move(public_path('uploades'), $image_name);

        $medicine = new medicine();
        $medicine->title = $request->title;
        $medicine->name = $request->name;
        $medicine->owner = $request->input('owner');
        $medicine->price = $request->price;
        $medicine->category = $request->category;
        $medicine->discount_price = $request->discount_price;

        $medicine->img = $image_name;

        if ($medicine->save()) {
            return response()->json([
                'status' => true,
                'message' => 'medicine created successfully',
                'data' => $medicine,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'medicine created failed',
                'data' => []
            ], 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $search = '')
    {
        if ($search) {
            $medicine = medicine::all();
        }
        $medicine = medicine::where('name' , 'like' , '%' . $search . '%')
            ->orWhere('title' , 'like' , '%' .$search . '%')
            ->orWhere('price' , 'like' , '%' .$search . '%')
            ->orWhere('category' , 'like' , '%' .$search . '%')->get();
        
        return $medicine;

    }

public function showc($id)
{
    
    $user = Auth::user();
    $name = $user ? $user->name : null;
    $comments = Comment::where('medicine_id', $id)->get();
    
    return response()->json([
        'comments' => $comments,
        'name' => $name
    ]);

}

    public function storec(Request $request)
    {
     
        $comment = new Comment();
        $comment->name = $request->input('name');
        $comment->content = $request->input('content');
        $comment->medicine_id = $request->input('medicine_id');
        $comment->created_at = Carbon::now();
        $comment->save();

        return $comment;
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $medicine = medicine::find($id);
        if ($medicine) {
            return response()->json([
                "status" => true,
                "message" => "medicine data retuned",
                "data" => $medicine
            ], 200);
        } else {
            return response()->json([
                "status" => false,
                "message" => "medicine Not Found",
                "data" => []
            ], 401);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
            $valid = Validator::make($request->all(),
            [
                'title' => 'required|max:50|min:2',
                'name' => 'required|max:255|min:2',
                'price' => 'required|max:10000',
                'category' => 'required',
                'img' => 'required'
            ]
        );
        if ($valid->fails()) {
            return response()->json([
                "status" => false,
                "message" => "medicine created failed",
                "data" => [
                    'errors' => $valid->errors(),
                ]
            ]);
        }
        
            $img = $request->file("img");
            $image_name = $img->getClientOriginalName();
            $image_name = time() . '_' . $image_name;
            $img->move(public_path('uploades'), $image_name);
            $medicine = medicine::find($id);
            
            $medicine->title = $request->title;
            $medicine->name = $request->name;
            $medicine->discount_price = $request->discount_price;
            $medicine->price = $request->price;
            $medicine->category = $request->category;
            $medicine->img = $image_name;

        if ($medicine->save()) {
            return response()->json([
                'status' => true,
                'message' => 'medicine Edit successfully',
                'data' => $medicine,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'medicine Edit failed',
                'data' => []
            ], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $medicine = medicine::find($id);
        if ($medicine->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'medicine deleted successfully',
                'data' => $medicine,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'medicine delete failed',
                'data' => []
            ], 401);
        }
    }

    public function cartProducts(Request $request) {
        $products = medicine::findMany($request->cartItems);
        $productTotal = $products->sum('discount_price');
        return response()->json([
            'products' => $products,
            'productTotal' => $productTotal
        ]);
    }

    public function generateUserData() {
        return response()->json(User::factory()->make());
    }
}
