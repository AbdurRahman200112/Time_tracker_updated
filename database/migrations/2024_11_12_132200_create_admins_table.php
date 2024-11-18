<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('designation')->nullable();
            $table->string('phone_no')->nullable();
            $table->string('address')->nullable();
            $table->string('verification_code', 6)->nullable();
            $table->timestamps(); // This will create both created_at and updated_at columns
        });
    }

    public function down()
    {
        Schema::dropIfExists('admins');
    }
}