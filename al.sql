select * from ct_surtidores cs where cs.empresas_id = 148;
select count(id) from ct_surtidores_detalles csd where csd.surtidores_id in (602,1099);
select * from fnc_reporte_comprobante_informe_diario('2022-10-05 02:21:53', '2022-10-06 09:55:41', 148);
select sum(cm.venta_total) from ct_movimientos cm where tipo = '017' and cm.empresas_id = 148 and cm.consecutivo >= 54521 and cm.consecutivo < 54547 and cm.jornadas_id >= 2210050101 and cm.jornadas_id < 2210060101;
select * from ct_movimientos cm where tipo = '017' and cm.empresas_id = 148 and cm.atributos ->> 'islas' is null and cm.jornadas_id >= 2210050101 and cm.jornadas_id < 2210060101;
select * from ct_movimientos cm where consecutivo_prefijo is null and empresas_id = 148;
select * from
SELECT * FROM public.ct_wacher_parametros WHERE equipos_id=284 OR empresas_id IS null;