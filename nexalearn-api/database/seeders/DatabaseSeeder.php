<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $web = Category::create([
            'name' => 'Desarrollo Web',
        ]);
    
        $ai = Category::create([
            'name' => 'Inteligencia Artificial',
        ]);
    
        $data = Category::create([
            'name' => 'Ciencia de Datos',
        ]);
    
    
        Course::create([
            'title' => 'React desde cero',
            'description' => 'Aprende los fundamentos de React y desarrolla interfaces modernas.',
            'price' => 299,
            'image' => 'https://placehold.co/600x400?text=React',
            'category_id' => $web->id,
        ]);
    
        Course::create([
            'title' => 'Laravel API',
            'description' => 'Construye APIs REST utilizando Laravel.',
            'price' => 349,
            'image' => 'https://placehold.co/600x400?text=Laravel',
            'category_id' => $web->id,
        ]);
    
        Course::create([
            'title' => 'Introducción a Inteligencia Artificial',
            'description' => 'Conoce los fundamentos y aplicaciones actuales de la IA.',
            'price' => 399,
            'image' => 'https://placehold.co/600x400?text=IA',
            'category_id' => $ai->id,
        ]);
    
        Course::create([
            'title' => 'Machine Learning con Python',
            'description' => 'Construye modelos básicos de aprendizaje automático.',
            'price' => 449,
            'image' => 'https://placehold.co/600x400?text=Machine+Learning',
            'category_id' => $ai->id,
        ]);
    
        Course::create([
            'title' => 'SQL para análisis de datos',
            'description' => 'Aprende consultas SQL orientadas al análisis de información.',
            'price' => 249,
            'image' => 'https://placehold.co/600x400?text=SQL',
            'category_id' => $data->id,
        ]);
    
        Course::create([
            'title' => 'Python para Data Science',
            'description' => 'Analiza y transforma datos utilizando Python.',
            'price' => 379,
            'image' => 'https://placehold.co/600x400?text=Python',
            'category_id' => $data->id,
        ]);
    }
}
