<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('cause_id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('city_id');
            $table->string('name');
            $table->integer('current_items')->default(0);
            $table->string('status')->default(1);
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->text('text');
            $table->string('charity')->nullable();
            $table->integer('goal_item');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('location');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('cause_id')->references('id')->on('causes');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('city_id')->references('id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('events');
        Schema::enableForeignKeyConstraints();
    }
}
