<?php

uses(Tests\TestCase::class);

/**
 * A basic test example.
 */
it('deve retornar status OK para rota /', function () {
    $response = $this->get('/');

    $response->assertOk();
});