CREATE OR REPLACE FUNCTION migrate_schema(change text)
RETURNS integer AS
$BODY$

DECLARE
v_schema text;
BEGIN
	FOR v_schema IN
		SELECT quote_ident(nspname)  
		FROM   pg_namespace n
		WHERE  nspname !~~ 'pg_%' 
		LOOP
			EXECUTE 'SET LOCAL search_path = ' || v_schema;
			EXECUTE change;
END LOOP;
return 1;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;