<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all todos
        $todolist = Todo::all();
        return response()->json($todolist);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $todo = new Todo;
        $todo->task = $request->task;
        $todo->status = $request->status;
        $todo->save();

        return response()->json($todo);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return response()->json($todo);
    }

    /**
     * below two tasks are optional
     */
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        return response()->json([
            "this uri is todos/{todo}/edit, http method is GET",
            'everything inside {} means it is a parameter which will be retrieved by this function via $id variable',
            'retrieve the todo task which is intended to be edited and fit it in a form for user to edit'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->task = $request->task;
        $todo->status = $request->status;
        $todo->save();

        return response()->json($todo);
    }


    public function show($id)
    {
        //


    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        //

    }


}
