<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Item::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newItem = new Item;
        $newItem->name = $request->item["name"];
        $newItem->save();

        return $newItem;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $id)
    {
        //Item $id will use the model binding concept to get item record
        $item = $id;
        if($item)
        {
            $item->completed = $request->item['completed'] ? true : false;
            $item->completed_at = $request->item['completed'] ? Carbon::now() : null;
            $item->save();
            
            return $item;
        }

        return "Item not found";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $id)
    {
        $item = $id;
        if($item)
        {
            $item->delete();
            return "Item deleted successfully";
        }
        return "Item not found";
    }
}
