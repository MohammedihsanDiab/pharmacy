<?php

namespace App\Models;

use App\Models\medicine;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['name', 'content', 'product_id'];

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }
}
