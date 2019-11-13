<?php

namespace App\Models\V1;

use App\Models\V1\MainModel;

class Category extends MainModel
{
    protected $table = 'categories';

    protected $searchField = 'name';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'image', 'description'
    ];
}
